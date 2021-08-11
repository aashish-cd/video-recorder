import { useReactMediaRecorder } from 'react-media-recorder';

const RecordView = () => {
  const { status, startRecording, stopRecording, mediaBlobUrl } =
    useReactMediaRecorder({ video: true });

  return (
    <>
      <div className='d-flex flex-column justify-content-end container'>
        <h3 className='text-secondary'>Status: {status}</h3>
        <div className='p-2 m-2'>
          <button className='btn btn-primary m-2' onClick={startRecording}>
            Start Recording
          </button>
          <button className='btn btn-primary m-2' onClick={stopRecording}>
            Stop Recording
          </button>

          <button
            className='btn btn-primary m-2'
            onClick={() => window.location.reload(false)}
          >
            Reload
          </button>
        </div>
        <video className='video ' src={mediaBlobUrl} controls autoPlay loop />
      </div>
    </>
  );
};

export default RecordView;
