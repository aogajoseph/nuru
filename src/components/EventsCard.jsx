import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const cardStyles = [
  {
    background: 'linear-gradient(135deg, #e3f0ff 0%, #f3e7ff 100%)',
    border: '1.5px solid #b3d1ff',
  },
  {
    background: 'linear-gradient(135deg, #fffbe7 0%, #e7fff3 100%)',
    border: '1.5px solid #ffe7b3',
  },
  {
    background: 'linear-gradient(135deg, #f3e7ff 0%, #e3f0ff 100%)',
    border: '1.5px solid #d1b3ff',
  },
  {
    background: 'linear-gradient(135deg, #e7fff3 0%, #fffbe7 100%)',
    border: '1.5px solid #b3ffe7',
  },
];

export default function EventsCard({ title, subtitle, image, date, description, idx }) {
  const style = cardStyles[idx % cardStyles.length];
  return (
    <Card sx={{ maxWidth: 500, minWidth: 340, flex: 1, mb: 2, borderRadius: 3, ...style, boxShadow: '0 2px 12px 0 rgba(90, 100, 120, 0.07)' }}>
      {image && (
        <CardMedia
          component="img"
          sx={{ width: '100%', height: 200, objectFit: 'cover', borderRadius: 2, mb: 0.5 }}
          image={image}
          alt={title}
        />
      )}
      <CardContent sx={{ pb: 2 }}>
        <Typography gutterBottom variant="h6" component="div" sx={{ fontSize: 17, fontWeight: 600, color: '#333', mb: 0.5 }}>
          {title}
        </Typography>
        {subtitle && (
          <Typography variant="subtitle2" component="div" sx={{ color: 'text.secondary', fontSize: 13, fontWeight: 400, mb: 0.5 }}>
            {subtitle}
          </Typography>
        )}
        {date && (
          <Typography variant="caption" color="text.secondary" display="block" mb={1} sx={{ fontSize: 12 }}>
            {date}
          </Typography>
        )}
        {description && (
          <Typography variant="body2" color="text.secondary" sx={{ fontSize: 13, mb: 0 }}>
            {description}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
}
