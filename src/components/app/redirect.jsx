import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Redirect({ to }) {
  // react-router-dom V6版本的重定向函数
  const navigate = useNavigate();
  useEffect(() => {
    navigate(to);
  });
  return null;
}

export default Redirect;
