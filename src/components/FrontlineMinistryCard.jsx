import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const cardStyles = [
  {
    background: 'linear-gradient(120deg, #f8f6ff 0%, #e0e7ff 100%)',
    border: '2px solid #b39ddb',
  },
  {
    background: 'linear-gradient(120deg, #e0e7ff 0%, #f8f6ff 100%)',
    border: '2px solid #90caf9',
  },
  {
    background: 'linear-gradient(120deg, #fffde7 0%, #e0f7fa 100%)',
    border: '2px solid #ffe082',
  },
  {
    background: 'linear-gradient(120deg, #e0f7fa 0%, #fffde7 100%)',
    border: '2px solid #80cbc4',
  },
];

export default function FrontlineMinistryCard({ title, subheader, image, description, details, idx, expanded, onExpand }) {
  const style = cardStyles[idx % cardStyles.length];

  return (
    <Card sx={{ minWidth: 340, maxWidth: 600, flex: 1, mb: 2, borderRadius: 2, ...style, boxShadow: '0 2px 16px 0 rgba(76, 0, 130, 0.08)' }}>
      <CardHeader
        title={<Typography sx={{ fontSize: 18, fontWeight: 700, color: '#4B0082' }}>{title}</Typography>}
        subheader={<Typography sx={{ fontSize: 14, color: 'text.secondary', fontWeight: 400 }}>{subheader}</Typography>}
        sx={{ pb: 0.5 }}
      />
      {image && (
        <CardMedia
          component="img"
          height="170"
          image={image}
          alt={title}
          sx={{ borderRadius: 2, mx: 2, my: 1 }}
        />
      )}
      <CardContent sx={{ pt: 1, pb: 1 }}>
        <Typography variant="body2" sx={{ color: '#333', fontSize: 14, mb: 1.5 }}>
          {description}
        </Typography>
      </CardContent>
      {details && (
        <CardActions disableSpacing sx={{ pt: 0, pb: 1, px: 2 }}>
          <span
            style={{
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer',
              color: '#4B0082',
              fontWeight: 500,
              fontSize: 13,
              userSelect: 'none',
            }}
            onClick={onExpand}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <span style={{ marginRight: 4 }}>{expanded ? 'Less' : 'More'}</span>
            <ExpandMoreIcon
              sx={{
                transition: 'transform 0.2s',
                transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
                ml: 0.5,
              }}
            />
          </span>
        </CardActions>
      )}
      {details && (
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent sx={{ pt: 0 }}>
            <Typography paragraph sx={{ fontSize: 13 }}>{details}</Typography>
          </CardContent>
        </Collapse>
      )}
    </Card>
  );
} 