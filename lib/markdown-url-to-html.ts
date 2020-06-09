import mdR from "./markdown-regex";

export default function mdUrl(file: string) {
  const filname = file.split('/').pop();
  if(filname && filname.lastIndexOf(".") < 1){
    file = `${file}.md`;
  }
  return file.replace(mdR, ".html");
}
