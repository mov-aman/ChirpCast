import './ChirpButton.css';

export default function ChirpButton(props) {
  const pop_activities_form = (event) => {
    props.setPopped(true);
  }

  return (
    <button onClick={pop_activities_form} className='post' href="#">Chirp</button>
  );
}