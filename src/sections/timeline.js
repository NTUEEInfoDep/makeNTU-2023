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
  const sQData = useStaticQuery(graphql`
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

  const timelineData = sQData.allContentfulTimelineData.edges[0].node;

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
      return <div>{props.type}</div>;
    }
  };

  const TimelineEventLeft = (props) => {
    return (
      <Typography color={props.color || "primary"}>
        <Box textAlign="right" overflow="visable" whiteSpace="nowrap">
          {props.children}
        </Box>
      </Typography>
    );
  };

  const TimelineEventCenter = (props) => {
    return <Avatar className={classes.avatar}>{props.children}</Avatar>;
  };

  const TimelineEventRight = (props) => {
    return (
      <Typography color={props.color || "primary"}>
        <Box textAlign="left" overflow="visable" whiteSpace="nowrap">
          {props.children}
        </Box>
      </Typography>
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
      <div>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          wrap="nowrap"
          spacing={1}
        >
          <Grid item xs={4}>
            <TimelineEventLeft color={props.color}>
              {props.left}
            </TimelineEventLeft>
          </Grid>

          <Grid item>
            <TimelineEventCenter>
              <TimelineIcon type={props.center} />
            </TimelineEventCenter>
          </Grid>

          <Grid item xs={4}>
            <TimelineEventRight color={props.color}>
              {props.right}
            </TimelineEventRight>
          </Grid>
        </Grid>
        <TimelineEventConnector end={props.end} />
      </div>
    );
  };

  const TimelineEvents = (props) => {
    if (props.eventData.length) {
      return (
        <div>
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
        </div>
      );
    }
    return <div>error</div>;
  };

  const TimelineCard = (props) => {
    return (
      <Paper elevation={3} className={classes.paper}>
        <Box py={5}>
          <Typography variant="h5" color="primary">
            <Box mb={3} textAlign="center">
              {props.title}
            </Box>
          </Typography>
          <TimelineEvents eventData={props.events} />
        </Box>
      </Paper>
    );
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
              spacing={9}
            >
              {timelineData.data.length ? (
                timelineData.data.map((day) => {
                  return (
                    <Grid item>
                      <TimelineCard
                        title={day.date || ""}
                        events={day.events}
                      />
                    </Grid>
                  );
                })
              ) : (
                <Grid item>error</Grid>
              )}
            </Grid>
          </ThemeProvider>
        </div>
      </div>
    </section>
  );
};
