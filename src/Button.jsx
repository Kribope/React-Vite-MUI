import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function ButtonUsage() {
  return (
    <Button variant="contained" href="https://github.com/Kribope" target="bank__" 
    sx={{ width: '200px', height: '50px' }}>
      <Typography style={{ fontSize: '20px' }}>GITHUB</Typography>
    </Button>
  );
}

export default ButtonUsage;