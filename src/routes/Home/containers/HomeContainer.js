import {connect} from 'react-redux';
import Home from '../components/Home';
import {getcurrentlocation} from '../modules/home';

const mapStateToProps = (state) =>({
  region: state.home.region
});

const mapActionCreators = { 
  getcurrentlocation
};
export default connect(mapStateToProps, mapActionCreators )(Home);