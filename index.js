const dragAndDrop = () => {
    const card = document.querySelector('.js-cell-card');
    const cells = document.querySelectorAll('.js-cell');

    const dragStartHandler = function () {
        setTimeout(() => {
            this.classList.add('hide');
        }, 0);
    };

    const dragEndHandler = function () {
        this.classList.remove('hide');
    };

    const dragOverHandler = function (event) {
        event.preventDefault();
    };

    const dragEnterHandler = function () {
        this.classList.add('hovered');
    };

    const dragLeaveHandler = function () {
        this.classList.remove('hovered');
    };

    const dropHandler = function () {
        this.append(card);
    };

    cells.forEach((cell) => {
       cell.addEventListener('dragover', dragOverHandler);
        cell.addEventListener('dragenter', dragEnterHandler);
        cell.addEventListener('dragleave', dragLeaveHandler);
        cell.addEventListener('drop', dropHandler);

    });

    card.addEventListener('dragstart', dragStartHandler);
    card.addEventListener('dragend', dragEndHandler);
};

const eventsCaption = () => {
    const title = document.querySelector('.js-caption');

    title.addEventListener('click', () => {
        if (!title.classList.contains('captionclick')) {
            title.classList.add('captionclick');
        } else {
            title.classList.remove('captionclick');
        }
    });
};

const visibleCat = () => {
    const title = document.querySelector('.js-title');
    const cat = document.querySelector('.js-cats__container');

    title.addEventListener('click', () => {
        cat.classList.add('cat-animation')
    });
};


const isClosed = () => {
    window.onbeforeunload = function() {
        return true;
    };
};



dragAndDrop();
eventsCaption();
visibleCat();
isClosed();