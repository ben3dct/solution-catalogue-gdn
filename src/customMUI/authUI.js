/** @format */

import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

export const GoogleSignInButton = styled(Button)({
	boxShadow: "none",
	textTransform: "none",
	fontSize: 25,
	padding: "6px 12px",
	border: "1px solid",
	lineHeight: 1.5,
	backgroundColor: "#00ecbd",
	borderColor: "#0063cc",
	fontFamily: [
		"-apple-system",
		"BlinkMacSystemFont",
		'"Segoe UI"',
		"Roboto",
		'"Helvetica Neue"',
		"Arial",
		"sans-serif",
		'"Apple Color Emoji"',
		'"Segoe UI Emoji"',
		'"Segoe UI Symbol"',
	].join(","),
	"&:hover": {
		backgroundColor: "#00ecbd",
		borderColor: "#0062cc",
		boxShadow: "none",
	},
	"&:active": {
		boxShadow: "none",
		backgroundColor: "#0062cc",
		borderColor: "#005cbf",
	},
	"&:focus": {
		boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
	},
});

export const AddSolution = styled(Button)({
	boxShadow: "none",
	textTransform: "none",
	fontSize: 16,
	fontWeight: "bolder",
	color: "black",
	padding: "6px 12px",
	border: "1px solid",
	lineHeight: 1.5,
	cursor: "copy",
	backgroundColor: "#00ECBD",
	borderColor: "black",
	fontFamily: [
		"-apple-system",
		"BlinkMacSystemFont",
		'"Segoe UI"',
		"Roboto",
		'"Helvetica Neue"',
		"Arial",
		"sans-serif",
		'"Apple Color Emoji"',
		'"Segoe UI Emoji"',
		'"Segoe UI Symbol"',
	].join(","),
	"&:hover": {
		backgroundColor: "#00ECBD",
		borderColor: "black",
		boxShadow: "none",
	},
	"&:active": {
		boxShadow: "none",
		backgroundColor: "#00ECBD",
		borderColor: "#black",
	},
	"&:focus": {
		boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
	},
});
