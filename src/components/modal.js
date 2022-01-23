// Codes By Mahdi Tasha
// Modal For Any Errors

// Function That Will Close The Modal
function hideModal() {
    document.getElementById('modal').style.opacity = '0';
    document.getElementById('modal').style.pointerEvents = 'none';

}

export function showModal() {
    document.getElementById('modal').style.opacity = '100%';
    document.getElementById('modal').style.pointerEvents = 'visible';
}

// A Function Component That Uses Props
function Modal(props) {
    return (
        <div id={'modal'} className="p-fixed opacity-0 pointer-none bg-dark-rgba width-100 h-100 dis-flex jc-center ai-center transition">
            <div className="modal bgc-white p2 shadow roundeddot5 width-50">
                <div className={'modal-close-btn-holder width-100 dis-flex jc-end'}>
                    <button className={'fs-2 width-10 bg-none border-none'} onClick={hideModal}>
                        <i className="bi bi-x fs-2rem mb-1rem"></i>
                    </button>
                </div>
                <div className="dis-flex jc-center ai-center c-red fs-3">
                    <i className="bi bi-x-circle-fill"></i>
                </div>
                <p id={'massage'} className={'width-100 dis-flex jc-center'}>{props.massage}</p>
            </div>
        </div>
    );
}

export default Modal;