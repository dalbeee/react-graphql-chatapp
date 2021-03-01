import { makeVar, ReactiveVar } from "@apollo/client";
import { useEffect, useState } from "react";

export interface Friends {}

export interface IUserInfo {
  id: string;
  friends: string[];
  rooms: string[];
}

class UserInfo {
  userInfo: ReactiveVar<IUserInfo[]>;
  constructor() {
    this.userInfo = makeVar([] as IUserInfo[]);
  }

  rooms() {
    return this.userInfo();
  }
}

// 키 값을 넣고, 저장하는 기능 + 반환값 + 세팅함수

const useLS = (key: string, initValue: any) => {
  const [values, setValues] = useState(() => {
    const getLSItem = localStorage.getItem(key);
    if (getLSItem) return JSON.parse(getLSItem);
    if (typeof initValue === "function") return initValue();
    else return initValue;
  });

  useEffect(() => {
    localStorage.setItem(key, values);
  }, [key, values]);

  return [values, setValues];
};
