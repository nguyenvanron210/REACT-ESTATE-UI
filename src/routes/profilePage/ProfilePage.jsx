import Chat from "../../components/chat/Chat";
import MyList from "../../my-list/MyList";
import "./ProfilePage.scss";

function ProfilePage() {
  return (
    <div className="profile-page">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>User Information</h1>
            <button>Update Profile</button>
          </div>
          <div className="info">
            <span>
              Avatar:
              <img
                src="https://images.pexels.com/photos/9590733/pexels-photo-9590733.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
            </span>
            <span>
              Username: <b>Van Ron</b>
            </span>
            <span>
              E-mail: <b>nguyenvanron210@gmail.com</b>
            </span>
          </div>
          <div className="title">
            <h1>My List</h1>
            <button>Create New Post</button>
          </div>
          <MyList />
          <div className="title">
            <h1>Save List</h1>
          </div>
          <MyList />
        </div>
      </div>
      <div className="chat-container">
        <div className="wrapper">
          <Chat />
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
