import {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";


const Cast = () => {
  const [casts, setCasts] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {})
}


export default Cast;