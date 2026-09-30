const info = document.querySelector('#info');

function showInfo(title, text) {
    document.querySelector('#dialog-title').textContent = title;
    document.querySelector('#dialog-text').textContent = text;
    info.showModal();
}

document.querySelector('#download').addEventListener('click', () => {
    window.open('https://dl.getmcl.com/MCL.exe', '_blank');
    showInfo('MCL App', 'Your download has started.');
});
document.querySelector('#discord').addEventListener('click', () => {
    window.open('https://discord.gg/Wqj4MyR4as', '_blank');
    showInfo('Discord server', 'Discord invite has been opened.');
});

for (const id of ['preview']) document.getElementById(id).addEventListener('click', () => document.querySelector('#image-dialog').showModal());
for (const dialog of document.querySelectorAll('dialog')) {
    dialog.querySelector('.close').addEventListener('click', () => dialog.close());
    dialog.addEventListener('click', event => {
        if (event.target === dialog) {
            const rect = dialog.getBoundingClientRect();
            if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
        }
    });
}
document.querySelector('#dismiss').addEventListener('click', () => info.close());