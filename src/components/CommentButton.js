import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Button, Icon, Label } from 'semantic-ui-react';

import { AuthContext } from '../context/auth';
import MyPopup from '../util/MyPopup';

function CommentButton({ post: { id, commentCount } }) {
    const { user } = useContext(AuthContext);

    const commentButton = user ? (
        <Button labelPosition="right" as={Link} to={`/posts/${id}`}>
            <Button color="blue" basic>
                <Icon name="comments" />
            </Button>
            <Label basic color="blue" pointing="left">
                {commentCount}
            </Label>
        </Button>
    ) : (
        <Button labelPosition="right" as={Link} to="/login">
            <Button color="blue" basic>
                <Icon name="comments" />
            </Button>
            <Label basic color="blue" pointing="left">
                {commentCount}
            </Label>
        </Button>
    )

    return (
        <MyPopup content="Comment on post">{commentButton}</MyPopup>
    )
}

export default CommentButton;
