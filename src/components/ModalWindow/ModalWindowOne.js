import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AttachFileIcon from '@material-ui/icons/AttachFile';
import VisibilityIcon from '@material-ui/icons/Visibility';

import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function ModalWindowOne(props) {
  const classes = useStyles();

  const [choice, setChoice] = useState("");

  const handleChangeChoice = (event) => {
    setChoice(event.target.value);
  };

  return (
    <div className="modalWindow">
      <div className="common">
        <div className="form">Форма</div>
        <div className="text">
          Дополнительный текст
          <img
            src="../../icons/icons8-песочные-часы-48.png"
            alt=""
            className="icon"
          />
        </div>
        <form className={classes.root} noValidate autoComplete="off">
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">
              Выбор чего-то*
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={choice}
              onChange={handleChangeChoice}
            >
              <MenuItem value={10}>Выбор 2</MenuItem>
              <MenuItem value={20}>Выбор 3</MenuItem>
              <MenuItem value={30}>Выбор 4</MenuItem>
              <MenuItem value={30}>Выбор 5</MenuItem>
            </Select>
          </FormControl>
          <div></div>
        </form>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField required id="standard-required" label="Номер телефона" />
        </form>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            required
            id="standard-required"
            label="Коротко о чём-то ещё"
          />
        </form>
        <button className="btn"><VisibilityIcon />Кнопка</button>
      </div>
    </div>
  );
}

export default ModalWindowOne;
