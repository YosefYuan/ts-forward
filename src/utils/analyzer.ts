import fs from "fs";
import cheerio from "cheerio";
import { Analyzer } from "./crowller";

interface Course {
  title: string;
  count: number;
}

interface CourseResult {
  time: number;
  data: Course[];
}

interface Content {
  [key: string]: Course[];
}

export default class DellAnalyzer implements Analyzer {
  private static instance: DellAnalyzer;

  public static getInstance() {
    if (!DellAnalyzer.instance) {
      DellAnalyzer.instance = new DellAnalyzer();
    }
    return DellAnalyzer.instance;
  }

  private getCourseInfo(html: string) {
    const $ = cheerio.load(html);
    const courseItems = $(".course-item");
    const courseInfos: Course[] = [];
    courseItems.map((index, element) => {
      const descs = $(element).find(".course-desc");
      const title = descs.eq(0).text();
      const count = parseInt(
        descs
          .eq(1)
          .text()
          .split("：")[1],
        10
      );
      courseInfos.push({ title, count });
    });
    const result = {
      time: new Date().getTime(),
      data: courseInfos
    };
    return result;
  }

  private generateJsonContent(courseInfo: CourseResult, filePath: string) {
    let fileContent: Content = {};
    if (fs.existsSync(filePath)) {
      try {
        // 当无原始内容时 JSON.parse 会报错
        fileContent = JSON.parse(fs.readFileSync(filePath, "utf-8"));
      } catch {}
    }
    fileContent[courseInfo.time] = courseInfo.data;
    return fileContent;
  }

  public analyze(html: string, filePath: string) {
    const courseInfo = this.getCourseInfo(html);
    const fileContent = this.generateJsonContent(courseInfo, filePath);
    return JSON.stringify(fileContent);
  }

  private constructor() {}
}
