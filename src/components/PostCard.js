import React, { useContext } from 'react';
import { Card, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import moment from 'moment';

import { AuthContext } from '../context/auth';
import LikeButton from './LikeButton';
import DeleteButton from './DeleteButton';
import CommentButton from './CommentButton';

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
                    src='https://previews.123rf.com/images/dzein/dzein1912/dzein191200010/135119000-smileys-emojis-famous-celebrity-vector-concept-famous-smiley-emoticon-yellow-faces-group-in-3d-reali.jpg'
                />
                <Card.Header>{username}</Card.Header>
                <Card.Meta as={Link} to={`/posts/${id}`}>
                    {moment(createdAt).fromNow(true)}
                </Card.Meta>
                <Card.Description>{body}</Card.Description>
            </Card.Content>
            <Card.Content extra>
                <LikeButton user={user} post={{ id, likes, likeCount }} />
                <CommentButton post={{ id, commentCount }} />
                {user && user.username === username && <DeleteButton postId={id} />}
            </Card.Content>
        </Card>
    );
}

export default PostCard;
