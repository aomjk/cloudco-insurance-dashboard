import React from 'react';
import { Circle } from 'rc-progress';
import { CardMedia, CardHeader } from 'material-ui/Card';
import Card from 'components/Card';
import { palette } from 'styles/muiTheme';
import classes from './ToneBox.scss';

const ToneBox = ({ toneResult }) => (
  <Card className={classes.container}>
    <CardHeader title="ALL SENTIMENTS" />
    {toneResult.length ?
      <CardMedia className={classes.graphsContainer}>
        {toneResult.map((emotion, i) =>
          <div key={i}>
            <p>{emotion.text}: {(emotion.value * 100).toFixed()}%</p>
            <Circle
              percent={(emotion.value * 100)}
              strokeWidth="8"
              trailWidth="8"
              strokeColor={palette[`graph${i + 1}Color`]}
              strokeLinecap="square"
            />
          </div>
        )}
      </CardMedia>
      :
      <img alt="loading" src="/watson_anim.gif" height="80px" width="80px" />
    }
  </Card>
  );

ToneBox.propTypes = {
  toneResult: React.PropTypes.arrayOf(React.PropTypes.shape({
    text: React.PropTypes.string.isRequired,
    value: React.PropTypes.number.isRequired,
  })).isRequired,
};

export default ToneBox;
