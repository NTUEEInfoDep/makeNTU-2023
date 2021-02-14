import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import { createMuiTheme, makeStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { Avatar, Box, Grid, Paper, Typography } from "@material-ui/core";

import BuildIcon from "@material-ui/icons/Build";
import Brightness2Icon from "@material-ui/icons/Brightness2";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import RestaurantIcon from "@material-ui/icons/Restaurant";
import HowToRegIcon from "@material-ui/icons/HowToReg";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import PollIcon from "@material-ui/icons/Poll";

const theme = createMuiTheme({
  palette: {
    primary: { main: "#0081A8" },
    secondary: { main: "#CC0049" },
  },
});

const useStyles = makeStyles((theme) => ({
  avatar: { backgroundColor: "#E3B600" },
  paper: { padding: theme.spacing(2, 8) },
}));

export default ({ contentModuleId }) => {
  const staticQueryData = useStaticQuery(graphql`
    {
      allContentfulTimelineData {
        edges {
          node {
            heading
            data {
              date
              events {
                color
                icon
                notEnd
                text
                time
              }
            }
          }
        }
      }
    }
  `);

  const timelineData = staticQueryData.allContentfulTimelineData.edges[0].node;

  const classes = useStyles();

  const TimelineIcon = (props) => {
    if (props.type === "BuildIcon") {
      return <BuildIcon />;
    } else if (props.type === "Brightness2Icon") {
      return <Brightness2Icon />;
    } else if (props.type === "Brightness7Icon") {
      return <Brightness7Icon />;
    } else if (props.type === "RestaurantIcon") {
      return <RestaurantIcon />;
    } else if (props.type === "HowToRegIcon") {
      return <HowToRegIcon />;
    } else if (props.type === "EqualizerIcon") {
      return <EqualizerIcon />;
    } else if (props.type === "PollIcon") {
      return <PollIcon />;
    } else {
      return <>{props.type}</>;
    }
  };

  const TimelineEventLeft = (props) => {
    return (
      <Grid item xs={4}>
        <Typography color={props.color || "primary"}>
          <Box textAlign="right" overflow="visable" whiteSpace="nowrap">
            {props.children}
          </Box>
        </Typography>
      </Grid>
    );
  };

  const TimelineEventCenter = (props) => {
    return (
      <Grid item>
        <Avatar className={classes.avatar}>{props.children}</Avatar>
      </Grid>
    );
  };

  const TimelineEventRight = (props) => {
    return (
      <Grid item xs={4}>
        <Typography color={props.color || "primary"}>
          <Box textAlign="left" overflow="visable" whiteSpace="nowrap">
            {props.children}
          </Box>
        </Typography>
      </Grid>
    );
  };

  const TimelineEventConnector = (props) => {
    return (
      <Typography color="primary">
        <Box my={-1.2} textAlign="center">
          {props.end ? "" : "|"}
        </Box>
      </Typography>
    );
  };

  const TimelineEvent = (props) => {
    return (
      <>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          wrap="nowrap"
          spacing={1}
        >
          <TimelineEventLeft color={props.color}>
            {props.left}
          </TimelineEventLeft>
          <TimelineEventCenter>
            <TimelineIcon type={props.center} />
          </TimelineEventCenter>
          <TimelineEventRight color={props.color}>
            {props.right}
          </TimelineEventRight>
        </Grid>
        <TimelineEventConnector end={props.end} />
      </>
    );
  };

  const TimelineEvents = (props) => {
    if (props.eventData.length) {
      return (
        <>
          {props.eventData.map((event) => {
            return (
              <TimelineEvent
                color={event.color}
                end={
                  !event.notEnd &&
                  props.eventData[props.eventData.length - 1] === event
                }
                center={event.icon}
                left={event.time}
                right={event.text}
              />
            );
          })}
        </>
      );
    }
    return <>error</>;
  };

  const TimelineCard = (props) => {
    return (
      <Grid item>
        <Paper elevation={3} className={classes.paper}>
          <Box py={2}>
            <Typography variant="h5" color="primary">
              <Box mb={3} textAlign="center">
                {props.title}
              </Box>
            </Typography>
            <TimelineEvents eventData={props.events} />
          </Box>
        </Paper>
      </Grid>
    );
  };

  const TimelineCards = (props) => {
    if (props.data.length) {
      return (
        <>
          {props.data.map((day) => {
            return <TimelineCard title={day.date || ""} events={day.events} />;
          })}
        </>
      );
    }
    return <>error</>;
  };

  return (
    <section id="timeline" className="section bg-gray">
      <div className="container mx-auto">
        <h2
          className="text-center section__title mb-16"
          data-sal="fade"
          data-sal-easing="ease-in-cubic"
        >
          {timelineData.heading}
        </h2>
        <div
          className={classes.root}
          data-sal="fade"
          data-sal-delay="100"
          data-sal-easing="ease-in-cubic"
        >
          <ThemeProvider theme={theme}>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="flex-start"
              spacing={5}
            >
              <TimelineCards data={timelineData.data} />
            </Grid>
          </ThemeProvider>
        </div>
      </div>
    </section>
  );
};
