import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material'
import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { BlogDetail } from '../App';
import { useNavigate } from 'react-router-dom';
const BlogCard = ({ val }) => {
    const { logged, blogs, setBlogs, setOpenSnack,setWrite } = BlogDetail();
    const navigate = useNavigate();

    const edit = (e) => {
        setWrite({open:true,data:val})
    }
    const redirect = () => {
        navigate(`/post/:${val.id}`)
    }

    return (
        <Card sx={{ maxWidth: 500 }}>
            <CardHeader
                avatar={
                    <Avatar >
                        {val.authorName.charAt(0)}
                    </Avatar>
                }
                title={val.authorName}
                action={
                    (logged.user.toLowerCase() === val.authorName.toLowerCase()) && <><IconButton aria-label="Edit" onClick={edit}>
                        <EditIcon sx={{ color: "black" }} />
                    </IconButton><IconButton aria-label="Delete" onClick={() => {
                        setBlogs(blogs.filter((val1) => val1.id !== val.id))
                        setOpenSnack({ open: true, html: ` " ${val.title} " has been deleted successfully`, time: 1500, severity: "success" })
                    }} >
                            <DeleteIcon sx={{ color: "red" }} />
                        </IconButton></>
                }
            />
            <CardMedia
                component="img"
                height="194"
                image={val.src}
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="h2" color="text.primary" style={{ fontSize: "16px", fontWeight: "400" }}>
                    {val.title} ...
                    <p style={{ cursor: "pointer", fontSize: "1rem", color: "green" }} onClick={redirect}>Read More</p>
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default BlogCard