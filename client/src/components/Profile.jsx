import React from 'react';
import axios from 'axios';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';
import FriendList from './FriendList.jsx';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      friends: [],
      checkins: [],
      reviews: [],
      favorites: []
    };
    this.loggedUser = JSON.parse(localStorage.getItem('loggedUser'));
    TimeAgo.locale(en);
  }

  createDate(createdAt) {
    const timeAgo = new TimeAgo('en-US');
    return timeAgo.format(new Date(createdAt));
  }

  fetchProfile() {
    axios.get(`/server/user/${this.loggedUser.id}`)
      .then(resp => {
        this.setState({ user: resp.data[0] });
      })
      .catch(err => {
        console.log(err);
      });
  }

  fetchFriends() {
    // const { profileId } = this.props;
    axios.get(`/user/friends/${this.loggedUser.id}`)
      .then(resp => {
        this.setState({ friends: resp.data });
      })
      .catch(err => {
        console.log(err);
      });
  }
  
  fetchCheckins() {
    // const { profileId } = this.props;
    axios.get(`/user/checkins/${this.loggedUser.id}`)
      .then(resp => {
        this.setState({ checkins: resp.data });
      })
      .catch(err => {
        console.log(err);
      });
  }
  
  fetchReviews() {
    // const { profileId } = this.props;
    axios.get(`/user/reviews/${this.loggedUser.id}`)
      .then(resp => {
        this.setState({ reviews: resp.data });
      })
      .catch(err => {
        console.log(err);
      });
  }
  
  fetchFavorites() {
    // const { profileId } = this.props;
    axios.get(`/user/favorites/${this.loggedUser.id}`)
      .then(resp => {
        this.setState({ favorites: resp.data });
      })
      .catch(err => {
        console.log(err);
      });
  }
  
  renderUserInfo() {
    // const { user } = this.state;
    return [
      <div key={0}>{`Name:  ${this.loggedUser.name}`}</div>,
      <div key={1}>{`Email: ${this.loggedUser.email}`}</div>,
      <div key={2}>{`Username: ${this.loggedUser.username}`}</div>,
      <div key={3}>{`Created At: ${this.createDate(this.loggedUser.createdAt)}`}</div>,
    ];
  }

  renderFriends() {
    const friends = this.state.friends;
    if (friends.length) {
      return <FriendList friends={friends} userId={this.loggedUser.id}/>
    }
    return <span>No friends</span>;
  }

  renderCheckins() {
    const { checkins } = this.state;
    if (checkins.length) {
      return checkins.map(checkin => {
        return (
          <div key={checkin.id}>
            <div>{checkin.name}</div>
            <div>{this.createDate(checkin.createdAt)}</div>
          </div>
        );
      });
    }
    return '';
  }

  renderReviews() {
    const { reviews } = this.state;
    if (reviews.length) {
      return reviews.map(review => {
        return (
          <div key={review.id}>
            <div>{review.name}</div>
            <div>{review.text}</div>
            <div>{this.createDate(review.createdAt)}</div>
          </div>
        );
      });
    }
    return '';
  }

  renderFavorites() {
    const { favorites } = this.state;
    if (favorites.length) {
      return favorites.map(favorite => {
        return (
          <div key={favorite.id}>{favorite.name}</div>
        );
      });
    }
    return '';
  }

  componentDidMount() {
    this.fetchProfile();
    this.fetchFriends();
    this.fetchCheckins();
    this.fetchReviews();
    this.fetchFavorites();
  }
  
  render() {
    return (
      <div>
        <div>Profile Page</div>
        <div>
          <div>Profile Info</div>
          {this.renderUserInfo()}
        </div>
        <div>
          <div>Friends</div>
          {this.renderFriends()}
        </div>
        <div>
          <div>Check-ins</div>
          {this.renderCheckins()}
        </div>
        <div>
          <div>Reviews</div>
          {this.renderReviews()}
        </div>
        <div>
          <div>Favorites</div>
          {this.renderFavorites()}
        </div>
      </div>
    );
  }
}

export default Profile;