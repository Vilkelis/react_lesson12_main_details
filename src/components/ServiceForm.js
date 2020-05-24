import React from 'react';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {fetchServiceRequest } from '../actions/actionCreators';
import Alert from './Alert';			 

function ServiceForm(props) {
	const {match} = props;
	const {item, error, loading} = useSelector(state => state.serviceForm);
	const dispatch = useDispatch();

  React.useEffect( () => {
    dispatch(fetchServiceRequest(match.params.id));
  }, [dispatch, match.params.id]);

  const handleRetry = () => {
    dispatch(fetchServiceRequest(match.params.id));
  }


  if (loading) {
    return <div className="loading-big"><img src="/loading_big.gif" alt="Loading..."/></div>
  }

  if (error) {
    return <Alert text={'Произошла ошибка'} kind={"danger"} handleRetry={handleRetry}/>
  }

	return (
		<div  className="form">
			<div className="form-group">
				<label htmlFor="form-filed-name">Название</label>
				<div className="form-control">{item.name}</div>
			</div>
			<div className="form-group">
				<label htmlFor="form-filed-price">Стоимость (руб.)</label>
				<div className="form-control">{item.price}</div>							  
			</div>
			<div className="form-group">
				<label htmlFor="form-filed-content">Описание</label>
				<div className="form-control">{item.content}</div> 							  
			</div>
			<div className="form-group form-buttons" >
        <Link to={"/"}>&larr; В список</Link>
      </div>
		</div>
	);
}

export default ServiceForm;
