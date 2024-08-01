import { Box, Typography } from "@mui/material";
import SubmitButton from "./SubmitButton";

const PopUpData = ({setShowPopUp}) => {
    return (
      <Box 
        sx={{
          position: 'fixed', 
          top: 0, 
          right: 0, 
          bottom: 0, 
          left: 0, 
          backgroundColor: 'rgba(0, 0, 0, 0.5)', 
          backdropFilter: 'blur(5px)',
          zIndex: 9999 ,
          overflowY:'hidden'
        }}
      >
        <Box 
          sx={{
            position: 'fixed',
            border: "2px solid #212c6f",
            width: '18rem',
            px: 3,
            py: 3,
            borderRadius: '20px',
            backgroundColor: "#fff",
            fontSize: '30px',
            textAlign: 'center',
            top: "50%",
            left: "50%",
            transform: 'translate(-50%, -50%)',
          }}
        >
          <Typography variant='h5'>Thanks for your Feedback</Typography>
          <Typography>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</Typography>
          <SubmitButton onClick={() => setShowPopUp(false)} text={'close'} />
        </Box>
      </Box>
    );
  };
  export default PopUpData
