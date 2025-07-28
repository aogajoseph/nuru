import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const cardStyles = [
  {
    background: 'linear-gradient(135deg, #f3e7ff 0%, #e3f0ff 100%)',
    border: '1.5px solid #d1b3ff',
  },
  {
    background: 'linear-gradient(135deg, #e3f0ff 0%, #f3e7ff 100%)',
    border: '1.5px solid #b3d1ff',
  },
  {
    background: 'linear-gradient(135deg, #fffbe7 0%, #e7fff3 100%)',
    border: '1.5px solid #ffe7b3',
  },
  {
    background: 'linear-gradient(135deg, #e7fff3 0%, #fffbe7 100%)',
    border: '1.5px solid #b3ffe7',
  },
];

export default function NoticesCard({ title, subtitle, description, category, buttonLabel, idx }) {
  const style = cardStyles[idx % cardStyles.length];
  return (
    <Box sx={{ minWidth: 260, maxWidth: 340, flex: 1 }}>
      <Card variant="outlined" sx={{ ...style, borderRadius: 3, boxShadow: '0 2px 12px 0 rgba(90, 100, 120, 0.07)' }}>
        <CardContent>
          {category && (
            <Typography gutterBottom sx={{ color: '#7F00FF', fontSize: 13, fontWeight: 600, mb: 0.5, letterSpacing: 1 }}>
              {category}
            </Typography>
          )}
          <Typography variant="h6" component="div" sx={{ fontSize: 17, fontWeight: 600, mb: 0.5, color: '#333' }}>
            {title}
          </Typography>
          {subtitle && (
            <Typography sx={{ color: 'text.secondary', mb: 1, fontSize: 13, fontWeight: 400 }}>
              {subtitle}
            </Typography>
          )}
          <Typography variant="body2" sx={{ fontSize: 13, color: '#444', mb: 1.5 }}>
            {description}
          </Typography>
        </CardContent>
        {buttonLabel && (
          <CardActions>
            <Button size="small" sx={{ fontSize: 12, borderRadius: 2, color: '#7F00FF', marginTop: -2, }}>{buttonLabel}</Button>
          </CardActions>
        )}
      </Card>
    </Box>
  );
}
