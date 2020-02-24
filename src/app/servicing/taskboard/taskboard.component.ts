import {Component, ViewEncapsulation, ViewChild, ElementRef} from '@angular/core';

import {DragulaService} from 'ng2-dragula';
import {Router} from '@angular/router';
import {ApiService} from '../../shared/services/api.service';
import {ToastrService} from 'ngx-toastr';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ServiceCostingComponent} from '../service-costing/service-costing.component';

@Component({
    selector: 'app-taskboard',
    templateUrl: './taskboard.component.html',
    styleUrls: ['./taskboard.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class TaskboardComponent {
    BAG = 'task-group';
    tasks: any = {};
    groups = [
        {title: 'On Hold', key: 'backLog', icon: 'ft-alert-octagon', color: 'warning'},
        {title: 'To Do', key: 'todo', icon: 'ft-list', color: 'primary'},
        {title: 'In Progress', key: 'inProcess', icon: 'ft-trending-up', color: 'info'},
        {title: 'Completed', key: 'completed', icon: 'ft-thumbs-up', color: 'success'},
    ];

    constructor(private dragulaService: DragulaService, private apiService: ApiService, private router: Router,
                private toastr: ToastrService, private modalService: NgbModal) {
        this.tasks = this.groups.reduce((acc, cur) => {
            acc[cur.key] = [];
            return acc;
        }, {});
        this.loadTasks();
        dragulaService.drop(this.BAG)
            .subscribe(({el, target}) => {
                this.updateTaskStatus(el.getAttribute('task-id'), el.getAttribute('task-group'), target.id)
            });
    }

    loadTasks() {
        this.apiService.loadJobs()
            .then((data) => {
                this.tasks = this.groups.reduce((acc, cur) => {
                    acc[cur.key] = acc[cur.key] || [];
                    return acc;
                }, data)
            })
            .catch(e => {
                this.toastr.error('Error loading the job board. Please check your connection', 'Error');
            });
    }

    editTask(id: number) {
        this.router.navigate([`/servicing/jobs/add/${id}`]);
    }

    async updateTaskStatus(id: string, oldStatus: string, newStatus: string) {
        if (id) {
            this.loadTasks();
        }

    }

    async deleteTask(id: number) {
        const task: any = this.tasks.find(x => x.taskId === id);
        const index = this.tasks.indexOf(task);
        // await this.apiService.deleteJob(index);
        this.loadTasks();
    }

    addTask() {
        this.router.navigate(['/servicing/jobs/add']);
    }

    addCosting(task) {
        const modalRef = this.modalService.open(ServiceCostingComponent, {size: <any>'xl', centered: true});
        modalRef.componentInstance.job = task;
    }

}
