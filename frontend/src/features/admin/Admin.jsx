import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import Box from '@mui/material/Box';
import axios from "axios";

const Admin = () => {



  const [admin, setAdmin] = useState([]);
  const [userId, setUserId] = useState('');
  const [pass, setPass] = useState('');


  const navigate = useNavigate();

  const allow = () => {
        if (userId === 'admin' && pass === 'pass') {
            login(userId, pass);
            navigate('/adminProfile');
        }
    };

  useEffect(() => {
    axios
      .get(`http://localhost:5008/api/admin/`)
      .then((response) => {
        setAdmin(response.data);
      })
      .catch((error) => {
        console.error("Error fetching sodaing Admin", error);
      });
  }, []);
  return (
    <>


        <div className="relative  h-[1500px] w-screen bg-amber-100">
          <div className="h-[200px] w-screen">
          <h1 className="border-b-2 mt-96 ml-20 text-amber-950">Admin</h1>
        </div>
        
      
         
        <Box sx={{
        display:'grid', 
        gridTemplateColumns:'repeat(4, 1fr)',
        gridTemplateRows:'repeat(4, 1fr)',
        gap:2,
        padding:2,
        maxWidth:'1500px',
        paddingLeft:'200px'
      }}>
          
                 {admin.map((admin)=>(
            <Card  key={admin._id}>
              <CardActionArea>
                <CardMedia
                    component="img"
                    height="200"
                    image={`/image/image_not_found_Admin.jpg`}
                    alt="Adminy??"
                />

                <CardContent >
                  <Typography gutterBottom variant='h5' component="div">{admin.name}</Typography>
                   <br /><Typography gutterBottom variant='h5' component="div">{admin.title}</Typography>
                   <br /><Typography gutterBottom variant='body' sx={{mb:1}}><strong>Born: </strong>{new Date(admin.dob).toLocaleDateString('en-US',{
                year:'numeric',
                month:'long',
                day:'numeric',
              })}</Typography>
               <br />
                  <Typography gutterBottom variant='body' sx={{mb:1}}><strong>Died: </strong>{new Date(admin.dod).toLocaleDateString('en-US',{
                year:'numeric',
                month:'long',
                day:'numeric',
              })}</Typography>
              <br />
                  <Typography variant='body2' sx={{mb:1}}><strong>Mortality_Status: </strong>{admin.alive? 'Alive':'Dead'}</Typography>
                  <Typography variant='body2'><strong>Religion: </strong>{admin.religion}</Typography>
                </CardContent>
                <CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">
                      View Details
                    </Button>
                  </CardActions>
                </CardActionArea>
              </CardActionArea>
            </Card>
          ))}
      </Box>

        </div>
         
    </>
  )
}

export default Admin