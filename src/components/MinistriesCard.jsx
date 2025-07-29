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

export default function MinistriesCard({ title, subheader, image, description, details, idx, expanded, onExpand }) {
  const style = cardStyles[idx % cardStyles.length];

  return (
    <Card sx={{ width: '100%', mb: 2, borderRadius: 3, ...style, boxShadow: '0 2px 12px 0 rgba(90, 100, 120, 0.07)' }}>
      <CardHeader
        title={<Typography sx={{ fontSize: 17, fontWeight: 600, color: '#333' }}>{title}</Typography>}
        subheader={<Typography sx={{ fontSize: 13, color: 'text.secondary', fontWeight: 400 }}>{subheader}</Typography>}
        sx={{ pb: 0.5 }}
      />
      {image && (
        <CardMedia
          component="img"
          height="160"
          image={image}
          alt={title}
          sx={{ borderRadius: 2, mx: 2, my: 1 }}
        />
      )}
      <CardContent sx={{ pt: 1, pb: 1 }}>
        <Typography variant="body2" sx={{ color: '#444', fontSize: 13, mb: 1.5 }}>
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
              color: '#7F00FF',
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
            <Typography paragraph sx={{ fontSize: 13 }} component="span" dangerouslySetInnerHTML={{ __html: details }} />
          </CardContent>
        </Collapse>
      )}
    </Card>
  );
}
