enum paymentEnum {
  directPayment = "directPayment",
  stripe = "stripe",
}

export enum DISTRICT_TYPE {
  HK = "香港",
  KLN = "九龍或新界地區",
}

export enum COURSES_TYPE {
  PRIVATE_AUTO = "私家車自動波",
  PRIVATE_MANUAL = "私家車棍波",
  VAN_AUTO = "輕型貨車棍波",
  VAN_MANUAL = "輕型貨車自動波",
}

export enum QUALI_TYPE {
  BEGINNER = "新手",
  RETAKE = "補考",
  VAN_AUTO = "快期重考",
  VAN_MANUAL = "已有路試期",
}

export type ApplicationData = {
  name: string;
  contact: number;
  course: COURSES_TYPE;
  quali: string;
  payment: paymentEnum;
  district: DISTRICT_TYPE;
  remark: string;
};
