const {TouchBar} = require('electron');
const {TouchBarLabel, TouchBarButton, TouchBarSpacer, TouchBarGroup, TouchBarScrubber, TouchBarSegmentedControl} = TouchBar;

let spinning = false;

// Reel labels
const reel1 = new TouchBarLabel();
const reel2 = new TouchBarLabel();
const reel3 = new TouchBarLabel();

// Spin result label
const result = new TouchBarLabel();

// Spin button
const spin = new TouchBarButton({
    label: '🎰 Inventory',
    backgroundColor: '#7851A9',
})


const touchBar = new TouchBar({
    items: [
        new TouchBarButton({
            label: '🚂 Inventory',
            backgroundColor: '#529df1',
        }),
        new TouchBarButton({
            label: '💵 Financial',
            backgroundColor: '#fb5e28',
        }),
        new TouchBarButton({
            label: '🔧 Service',
            backgroundColor: '#60b051',
        }),
        new TouchBarButton({
            label: '🗃 Management',
            backgroundColor: '#f03a7a',
        }),
    ]
});

module.exports = touchBar;
