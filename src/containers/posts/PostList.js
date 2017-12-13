import React from 'react'
import {connect} from 'react-redux'
import {List, ListItem} from 'material-ui/List';
import _ from 'lodash'
import {fetchPosts} from '../../actions'
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom'

class PostList extends React.Component{

  componentDidMount(){
    this.props.fetchPosts();
  }

  renderList(){

    return _.map(this.props.posts,post => {
        return(
          <Link to={`/posts/${post.id}`}>
            <ListItem primaryText={post.title}></ListItem>
          </Link>
        )
      })

  }

  render(){
    return(
      <div>

          <Link to="/posts/new">
            <RaisedButton label="New Post" primary={true}></RaisedButton>
          </Link>

        <List> { this.renderList() } </List>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts
  }
}
export default connect(mapStateToProps, {fetchPosts})(PostList)