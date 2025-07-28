import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
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

export default function SermonsCard({ title, videoUrl, description, preacher, date, idx }) {
  const style = cardStyles[idx % cardStyles.length];
  return (
    <Card sx={{
      width: { xs: '100%', sm: '100%' },
      maxWidth: { xs: 340, sm: 400 },
      minWidth: 0,
      mb: 2,
      borderRadius: 3,
      ...style,
      boxShadow: '0 2px 12px 0 rgba(90, 100, 120, 0.07)'
    }}>
      {videoUrl && (
        <div style={{ position: 'relative', paddingTop: '56.25%', borderRadius: '12px', overflow: 'hidden' }}>
          <iframe
            src={videoUrl}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              border: 0,
              borderRadius: '12px',
            }}
          />
        </div>
      )}
      <CardContent sx={{ pb: 2 }}>
        <Typography gutterBottom variant="h6" component="div" sx={{ fontSize: 17, fontWeight: 600, color: '#333', mb: 0.5 }}>
          {title}
        </Typography>
        {(preacher || date) && (
          <Typography variant="subtitle2" color="text.secondary" sx={{ fontSize: 13, fontWeight: 400, mb: 1 }}>
            {preacher} {date && `| ${date}`}
          </Typography>
        )}
        <Typography variant="body2" color="text.secondary" sx={{ fontSize: 13, mb: 0 }}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}
