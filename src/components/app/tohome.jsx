import { useNavigate } from 'react-router-dom';
import './tohome.less';

function ToHome(params) {
  // react-router-dom V6版本的重定向函数
  const navigate = useNavigate();

  return (
    <span
      className="text"
      onClick={() => {
        navigate('home');
      }}
    >
      <b>Best</b>
      <span>Search</span>
    </span>
  );
}

export default ToHome;
