const constraints = {
    audio: false,
    video: true
};

const handleSuccess = (stream)=> {
    const video = document.querySelector('video');
    window.stream = stream; // make variable available to browser console
    video.srcObject = stream;
}

const handleError = (error) => {
    console.log('navigator.MediaDevices.getUserMedia error: ', error.message, error.name);
}

export const init= async () =>{
    try {
        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        handleSuccess(stream);
    } catch (e) {
        handleError(e);
    }
}



