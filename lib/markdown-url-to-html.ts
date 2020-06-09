import mdR from "./markdown-regex";

export default function mdUrl(file: string) {
  if(file.split('/').pop().lastIndexOf(".") < 1){
    file = `${file}.md`;
  }
  return file.replace(mdR, ".html");
}
