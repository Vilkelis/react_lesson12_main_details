import React from 'react'
import Alert from './Alert';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import { fetchServicesRequest } from '../actions/actionCreators';

function ServiceList(props) {   
  const {items, error, loading} = useSelector(state => state.serviceList);
  const dispatch = useDispatch();

  React.useEffect( () => {
    dispatch(fetchServicesRequest());
  }, [dispatch]);

  const handleRetry = () => {
    dispatch(fetchServicesRequest());
  }
 
  if (loading) {
    return <div className="loading-big"><img src="/loading_big.gif" alt="Loading..."/></div>
  }

  if (error) {
    return <Alert text={'Произошла ошибка'} kind={"danger"} handleRetry={handleRetry}/>
  }

  return (         
    <ul className="list-group">
      {items.map(o => (
        <li className="list-group-item" key={o.id}>
          <div className="list-group-item__content">
            <Link to= {'/' + o.id + '/details'}>
            {o.name}: {o.price} руб.           
            </Link>
          </div>          
        </li>
      ))}
    </ul>
  )
}

export default ServiceList