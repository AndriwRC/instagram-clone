const warning = document.querySelector('.warning');

const leaveButton = document.querySelector('.warning--leave-button');
leaveButton.addEventListener('click', closeWarning);

function closeWarning() {
    warning.classList.add('inactive');
}
