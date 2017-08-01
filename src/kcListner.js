export default function kcListner() {
    const pressed = []
    const komaniCode = 'uuddlrlrba';
    window.addEventListener('keyup', (e) => {
      switch (e.key) {
        case 'ArrowUp':
          pressed.push('u');
          break;
        case 'ArrowDown':
          pressed.push('d');
          break;
        case 'ArrowLeft':
          pressed.push('l');
          break
        case 'ArrowRight':
          pressed.push('r');
          break;
        default:
          pressed.push(e.key);
          break;
      }
      pressed.splice(-komaniCode.length - 1, pressed.length - komaniCode.length);
      if (pressed.join('') === komaniCode) {
        let url = 'http://vignette1.wikia.nocookie.net/jurassicpark/images/3/3d/Jurassic-world-lights-sounds-figure-raptor.jpg/revision/latest?cb=20150213221135';
        let raptor = document.createElement("img");
        raptor.src = url;
        raptor.id = 'raptor';
        let root = document.querySelector('#root');
        root.appendChild(raptor)
        setTimeout(() => {
          root.removeChild(raptor);
        }, 50000);
      }
    });
  }