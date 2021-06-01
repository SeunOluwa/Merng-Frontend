import React, { useContext } from 'react';
import { Button, Card, Icon, Image, Label } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import moment from 'moment';

import { AuthContext } from '../context/auth';
import LikeButton from './LikeButton';
import DeleteButton from './DeleteButton';
import MyPopup from '../util/MyPopup';

function PostCard({ 
    post: { body, createdAt, id, username, likeCount, commentCount, likes } 
}) {
    const { user } = useContext(AuthContext);

    return (
        <Card fluid>
            <Card.Content>
                <Image 
                    floated='right' 
                    size='mini' 
                    src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dreamstime.com%2Fillustration%2Fsu-logo.html&psig=AOvVaw0D74YSvLzOLdBgrSRIc0ck&ust=1622649375442000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLjDw5Dm9vACFQAAAAAdAAAAABAO' 
                />
                <Card.Header>{username}</Card.Header>
                <Card.Meta as={Link} to={`/posts/${id}`}>
                    {moment(createdAt).fromNow(true)}
                </Card.Meta>
                <Card.Description>{body}</Card.Description>
            </Card.Content>
            <Card.Content extra>
                <LikeButton user={user} post={{ id, likes, likeCount }} />
                <MyPopup content="Comment on post">
                    <Button labelPosition="right" as={Link} to={`/posts/${id}`}>
                        <Button color="blue" basic>
                            <Icon name="comments" />
                        </Button>
                        <Label basic color="blue" pointing="left">
                            {commentCount}
                        </Label>
                    </Button>
                </MyPopup>
                {user && user.username === username && <DeleteButton postId={id} />}
            </Card.Content>
        </Card>
    );
}

export default PostCard;
