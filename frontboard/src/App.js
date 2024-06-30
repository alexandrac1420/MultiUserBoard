import { useRef, useState, useEffect } from 'react';
import p5 from 'p5';
import axios from 'axios';

function App() {
  const [actions, setActions] = useState([]);
  const [color, setColor] = useState(getRandomColor());
  const containerRef = useRef(null);
  const p5InstanceRef = useRef(null);

  const sketch = (p) => {
    p.setup = () => {
      p.createCanvas(700, 410);
    };

    p.draw = () => {
      if (p.mouseIsPressed) {
        const action = { type: 'draw', x: p.mouseX, y: p.mouseY, color };
        axios.post('http://localhost:8080/actions', action)
          .then(response => {
            console.log('Action posted:', response.data);
          })
          .catch(error => {
            console.error('Error posting action:', error);
          });
        drawAction(p, action);
      }
    };
  };

  const drawAction = (p, action) => {
    p.fill(action.color);
    p.ellipse(action.x, action.y, 20, 20);
  };

  useEffect(() => {
    const fetchActions = async () => {
      try {
        const result = await axios.get('http://localhost:8080/actions');
        setActions(result.data);
      } catch (error) {
        console.error('Error fetching actions:', error);
      }
    };

    const interval = setInterval(fetchActions, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const p5Instance = new p5(sketch, containerRef.current);
    p5InstanceRef.current = p5Instance;
    return () => p5Instance.remove();
  }, []);

  useEffect(() => {
    if (p5InstanceRef.current) {
      p5InstanceRef.current.clear();  // Limpia el canvas antes de redibujar
      actions.forEach(action => drawAction(p5InstanceRef.current, action));
    }
  }, [actions]);

  const clearBoard = async () => {
    await axios.post('http://localhost:8080/clear')
      .then(response => {
        console.log('Board cleared:', response.data);
      })
      .catch(error => {
        console.error('Error clearing board:', error);
      });
    setActions([]);
  };

  return (
    <div>
      <button onClick={clearBoard}>Clear</button>
      <div ref={containerRef} id="container"></div>
    </div>
  );
}

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

export default App;
