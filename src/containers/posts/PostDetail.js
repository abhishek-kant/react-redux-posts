import React from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import FlatButton from 'material-ui/FlatButton';
import { fetchPostDetail } from '../../actions/index'


class PostDetail extends React.Component{

  componentDidMount(){
    const id = this.props.match.params.id
    this.props.fetchPostDetail(id);
  }

  render(){
    const { post } = this.props;

    if(!post){
      return <div>...loading</div>
    }

    return(
      <div>
        <Link to="/">
          <FlatButton label="Back to Posts" primary={true} fullWidth={true} />
        </Link>
        <h3>{post.title}</h3>
        <h4>Categories: {post.categories}</h4>
        <div>
          {post.content}
        </div>
      </div>
    )
  }

}

function matchPropsToState({ posts }, ownProps) {
  return {
    post: posts[ownProps.match.params.id]
  }
}

export default connect(matchPropsToState, { fetchPostDetail } )(PostDetail)

