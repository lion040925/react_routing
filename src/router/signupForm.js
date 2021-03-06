import React, { Component } from "react";
import { Typography, TextField, Paper, Button } from "@material-ui/core";
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton
} from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {
    margin: 20,
    padding: 20,
    maxWidth: 400
  },
  form: {
    display: "flex",
    alignItems: "baseline",
    justifyContent: "space-evenly"
  }
};

export default withStyles(styles)(
  class SignupForm extends Component {
    state = {
      exercises: [
        { id: 1, title: "벤치프레스" },
        { id: 2, title: "데드리프트" },
        { id: 3, title: "스쿼드" }
      ],
      title: ""
    };

    handleChange = e => {
      this.setState({
        [e.target.name]: e.target.value
      });
    };

    handleCreate = e => {
      e.preventDefaut();

      if (this.state.title) {
        this.setState(({ exercises, title }) => ({
          exercises: [
            ...exercises,
            {
              title,
              id: Date.now()
            }
          ],
          title: ""
        }));
      }
    };

    handleDelete = id => {
      this.setState(({ exercises }) => ({
        exercises: exercises.filter(ex => ex.id !== id)
      }));
    };

    render() {
      const title = this.state.title;
      const exercises = this.state.exercises;
      const classes = this.props.classes;

      return (
        <div>
          <Paper elevation="1" className={classes.root}>
            <Typography variant="h5" component="h3">
              회원가입
            </Typography>
            <Typography component="p">
              계정이 없으시면 회원으로 가입합니다{" "}
            </Typography>

            <form onSubmit={this.handleCreate}>
              <TextField
                name="title"
                label="유저아이디"
                margin="normal"
                value={title}
                onChange={this.handleChange}
              />
              <br />
              <TextField
                name="title"
                label="패스워드"
                margin="normal"
                value={title}
                onChange={this.handleChange}
              />
              <br />
              <TextField
                name="title"
                label="회원이름"
                margin="normal"
                value={title}
                onChange={this.handleChange}
              />
              <br />
              <TextField
                name="title"
                label="연락처"
                margin="normal"
                value={title}
                onChange={this.handleChange}
              />
              <br />
              <TextField
                name="title"
                label="이메일주소"
                margin="normal"
                value={title}
                onChange={this.handleChange}
              />
              <br />
              <Button type="submit" color="primary" variant="raised">
                Save
              </Button>
            </form>
          </Paper>
        </div>
      );
    }
  }
);
