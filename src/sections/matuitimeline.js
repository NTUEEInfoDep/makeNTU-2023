import React from "react";

import { createMuiTheme, makeStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { Typography, Paper, Grid } from "@material-ui/core";

import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineDot from "@material-ui/lab/TimelineDot";

import FiberManualRecordRoundedIcon from "@material-ui/icons/FiberManualRecordRounded";
import BuildOutlinedIcon from "@material-ui/icons/BuildOutlined";
import FastfoodOutlinedIcon from "@material-ui/icons/FastfoodOutlined";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#0081A8",
    },
    secondary: {
      main: "#CC0049",
    },
  },
});

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
  },
}));

export default function MatUITimeline() {
  const classes = useStyles();

  const EventDate = (props) => (
    <TimelineItem>
      <TimelineOppositeContent></TimelineOppositeContent>
      <TimelineSeparator>
        <Typography variant="h4" color="#000000">
          {props.time}
        </Typography>
      </TimelineSeparator>
      <TimelineContent></TimelineContent>
    </TimelineItem>
  );
  const EventPrimary = (props) => (
    <TimelineItem>
      <TimelineOppositeContent>
        <Typography variant="h5" color="primary">
          {props.time}
        </Typography>
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot color="primary">
          <FiberManualRecordRoundedIcon />
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <Typography variant="h5" color="primary">
          {props.text}
        </Typography>
      </TimelineContent>
    </TimelineItem>
  );
  const EventSecondary = (props) => (
    <TimelineItem>
      <TimelineOppositeContent>
        <Typography variant="h5" color="secondary">
          {props.time}
        </Typography>
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot color="secondary">
          <BuildOutlinedIcon />
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <Typography variant="h5" color="secondary">
          {props.text}
        </Typography>
      </TimelineContent>
    </TimelineItem>
  );
  const EventLast = (props) => (
    <TimelineItem>
      <TimelineOppositeContent>
        <Typography variant="h5" color="primary">
          {props.time}
        </Typography>
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot color="primary">
          <FiberManualRecordRoundedIcon />
        </TimelineDot>
      </TimelineSeparator>
      <TimelineContent>
        <Typography variant="h5" color="primary">
          {props.text}
        </Typography>
      </TimelineContent>
    </TimelineItem>
  );
  const EventMeal = (props) => (
    <TimelineItem>
      <TimelineOppositeContent>
        <Typography variant="h5" color="primary">
          {props.time}
        </Typography>
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot color="primary">
          <FastfoodOutlinedIcon />
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <Typography variant="h5" color="primary">
          {props.text}
        </Typography>
      </TimelineContent>
    </TimelineItem>
  );

  return (
    <section id="timeline" className="section bg-gray mx-auto">
      <div className="container mx-auto">
        <div>
          <h2 className="text-center section__title mb-16">活動時程</h2>
        </div>
        <div className={classes.root}>
          <ThemeProvider theme={theme}>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="flex-start"
              spacing={10}
            >
              <Grid item>
                <Paper className={classes.paper}>
                  <Timeline align="left">
                    <EventDate time="5/8" />
                    <EventPrimary time="09:00" text="報到" />
                    <EventPrimary time="10:00" text="開幕" />
                    <EventSecondary time="11:00" text="Start Making!" />
                    <EventMeal time="12:00" text="午餐" />
                    <EventMeal time="18:00" text="晚餐" />
                    <EventMeal time="21:00" text="宵夜" />
                  </Timeline>
                </Paper>
              </Grid>
              <Grid item>
                <Paper className={classes.paper}>
                  <Timeline align="left">
                    <EventDate time="5/9" />
                    <EventMeal time="07:00" text="早餐" />
                    <EventSecondary time="11:00" text="End of Making!" />
                    <EventMeal time="11:30" text="午餐" />
                    <EventPrimary time="12:00" text="分組評選" />
                    <EventPrimary time="16:00" text="八強決選" />
                    <EventPrimary time="17:00" text="頒獎典禮" />
                    <EventLast time="18:00" text="落幕" />
                  </Timeline>
                </Paper>
              </Grid>
            </Grid>
          </ThemeProvider>
        </div>
      </div>
    </section>
  );
}
