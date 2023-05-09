import React, { useState } from "react";
import { FieldErrors, useForm } from "react-hook-form";

type method = "email" | "phone" | "city" | "village";

interface Method {
  method?: method;
}

interface MethodMore {
  email?: string;
  password?: string;
}

interface IForm {
  email?: string;
  phone?: number;
  password?: string;
  password1?: string;
  password2?: string;

  cityAccount?: {
    email?: string;
    password1?: string;
    password2?: string;
  };
  villageAccount?: {
    email?: string;
    password1?: string;
    password2?: string;
  };
}

const Enter = () => {
  const [method, setMethod] = useState<Method>({
    method: "email",
  });

  const [account, setAccount] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    reset,
  } = useForm({
    mode: "onChange",
  });

  type methodForm = "cityAccount" | "cityLogin";

  const onValid = (data: IForm) => {
    if (data.cityAccount?.password2 !== data.cityAccount?.password1) {
      setError(
        "cityAccount.password2",
        { message: "passwords are not the same" },
        { shouldFocus: true }
      );
      return false;
    }

    if (data.villageAccount?.password1 !== data.villageAccount?.password2) {
      setError(
        "villageAccount.password2",
        { message: "passwords are not the same" },
        { shouldFocus: true }
      );
      return false;
    }

    console.log(data);
  };

  const onInvalid = (errors: FieldErrors) => {
    console.log(errors);
  };

  const onMethodClick = (
    event: React.SyntheticEvent<HTMLButtonElement | HTMLSelectElement>
  ) => {
    reset();
    const {
      currentTarget: { value },
    } = event;
    // console.log(event);
    if (
      value !== "email" &&
      value !== "phone" &&
      value !== "city" &&
      value !== "village"
    )
      return;
    setMethod({
      method: value,
    });
  };

  const onAccountClick = (event: React.SyntheticEvent<HTMLInputElement>) => {
    reset();
    const {
      currentTarget: { value },
    } = event;
    if (value === "login") return setAccount(false);
    if (value === "account") return setAccount(true);
  };

  return (
    <div>
      <h5 className="font-bold">Enter To Local Life Support Center</h5>

      {/* 이메일 or 전화번호 로그인 탭 */}
      {method.method === "city" || method.method === "village" ? null : (
        <div>
          <button value={"email"} onClick={onMethodClick}>
            Email
          </button>
          <button value={"phone"} onClick={onMethodClick}>
            Phone
          </button>
        </div>
      )}

      {/* Form 랜더링 */}
      <form onSubmit={handleSubmit(onValid, onInvalid)}>
        {/* 이메일 or 전화번호 인증방식 랜더링 */}
        {method.method === "email" || method.method === "phone" ? (
          <div>
            <label>
              {method.method === "email" ? "Email address" : null}
              {method.method === "phone" ? "Phone number" : null}
            </label>
            <div>
              {method.method === "email" ? (
                <input
                  {...register("email", {
                    required: true,
                    pattern: {
                      value:
                        /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/,
                      message: "Email pattern required",
                    },
                  })}
                  placeholder="email"
                  type="email"
                  required
                />
              ) : null}
              <p className="text-red-500">
                {errors.email?.message?.toString()}
              </p>
              {method.method === "phone" ? (
                <div>
                  <span>+82</span>
                  <input
                    {...register("phone", {
                      required: true,
                      pattern: {
                        value: /^01(?:0|1|[6-9])(\d{4}|\d{3})(\d{4})$/,
                        message: "length 10~11, start with '01'",
                      },
                    })}
                    placeholder="phone number"
                    type="number"
                    required
                  />
                  <p className="text-red-500">
                    {errors.phone?.message?.toString()}
                  </p>
                </div>
              ) : null}
            </div>
          </div>
        ) : null}

        {/* 담당자 로그인 랜더링 */}
        {method.method === "city" || method.method === "village" ? (
          <div>
            <label>
              {method.method === "city" ? "시군담당자 로그인" : null}
              {method.method === "village" ? "읍면동담당자 로그인" : null}
            </label>

            <div>
              {method.method === "city" || method.method === "village" ? (
                <input type="button" onClick={onAccountClick} value="login" />
              ) : null}
              {method.method === "city" || method.method === "village" ? (
                <input type="button" onClick={onAccountClick} value="account" />
              ) : null}
            </div>

            <div>
              {/* 시군담당자 로그인 회원가입 : 삼항연산자 중첩사용  */}
              {method.method === "city" && account === false ? (
                <div>
                  <label htmlFor="email">Email : </label>
                  <input
                    {...register("cityLogin.email", {
                      required: "Email is required",
                      validate: {
                        validate: (value) =>
                          value.includes("@korea.kr") || "Only '@korea.kr'",
                      },
                    })}
                    placeholder="email"
                    type="email"
                    id="email"
                    className={`${
                      Boolean(errors.email?.message) ? "border-red-1000" : ""
                    }`}
                  />
                  <p className="text-red-500">
                    {errors.cityLogin?.email?.message?.toString()}
                  </p>
                  <label htmlFor="password">Password : </label>
                  <input
                    {...register("cityLogin.password", {
                      required: "Password is required",
                      minLength: {
                        message: "The username should be longer than 5 chars",
                        value: 5,
                      },
                    })}
                    placeholder="password"
                    type="password"
                    id="password"
                  />
                  <p>{errors.cityLogin?.password?.message.toString()}</p>
                </div>
              ) : // 시군 회원가입
              method.method === "city" && account === true ? (
                <div>
                  <label htmlFor="email">Email</label>
                  <input
                    {...register("cityAccount.email", {
                      required: "Email is requierd",
                      validate: {
                        korea: (value) =>
                          value.includes("@korea.kr") || "Only '@korea.kr'",
                      },
                    })}
                    placeholder="email"
                    type="email"
                    id="email"
                  />
                  <p className="text-red-500">
                    {errors.cityAccount?.email?.message?.toString()}
                  </p>
                  <label htmlFor="password1">Password</label>
                  <input
                    {...register("cityAccount.password1", {
                      required: "Password is required",
                      minLength: {
                        message: "The password should be longer than 5 chars",
                        value: 5,
                      },
                    })}
                    placeholder="password"
                    type="password"
                    id="password1"
                  />
                  <p className="text-red-500">
                    {errors.cityAccount?.password1?.message.toString()}
                  </p>
                  <label htmlFor="password2">Password</label>
                  <input
                    {...register("cityAccount.password2", {
                      required: true,
                      minLength: {
                        message: "The password should be longer than 5 chars",
                        value: 5,
                      },
                    })}
                    placeholder="password"
                    type="password"
                    id="password2"
                  />
                  <p className="text-red-500">
                    {errors.cityAccount?.password2?.message?.toString()}
                  </p>
                </div>
              ) : null}

              {/* 읍면담당자 로그인 회원가입 : 삼항연산자 중첩사용  */}
              {method.method === "village" && account === false ? (
                <div>
                  <label htmlFor="email">Email</label>
                  <input
                    {...register("villageLogin.email", {
                      required: "Email is required",
                      validate: {
                        korea: (value) =>
                          value.includes("@korea.kr") || "Only 'korea.kr'",
                      },
                    })}
                    id="email"
                    placeholder="email"
                    type="email"
                  />
                  <p>{errors.villageLogin?.email?.message?.toString()}</p>
                  <label htmlFor="password">Password</label>
                  <input
                    {...register("villageLogin.password", {
                      required: "The password is required",
                      minLength: {
                        message: "The password should be longer than 5 chars",
                        value: 5,
                      },
                    })}
                    placeholder="password"
                    id="password"
                    type="password"
                  />
                  <p className="text-red-500">
                    {errors.villageLogin?.password?.message?.toString()}
                  </p>
                </div>
              ) : method.method === "village" && account === true ? (
                // 읍면 회원가입
                <div>
                  <label htmlFor="email">Email</label>
                  <input
                    {...register("villageAccount.email", {
                      required: "Email is required",
                      validate: {
                        korea: (value) =>
                          value.includes("@korea.kr") || "Only '@korea.kr'",
                      },
                    })}
                    placeholder="email"
                    type="email"
                    id="email"
                  />
                  <p>{errors.villageAccount?.email?.message?.toString()}</p>
                  <label htmlFor="password1">Password</label>
                  <input
                    {...register("villageAccount.password1", {
                      required: "Password is required",
                      minLength: {
                        message: "The password should be longer than 5 chars",
                        value: 5,
                      },
                    })}
                    id="password1"
                    placeholder="password"
                    type="password"
                  />
                  <p className="text-red-500">
                    {errors.villageAccount?.password1?.message?.toString()}
                  </p>
                  <label htmlFor="password2">password</label>
                  <input
                    {...register("villageAccount.password2", {
                      required: "Password is required",
                      minLength: {
                        message: "Password should be longer than 5 chars",
                        value: 5,
                      },
                    })}
                    id="password2"
                    placeholder="password"
                    type="password"
                  />
                  <p className="text-red-500">
                    {errors.villageAccount?.password2?.message?.toString()}
                  </p>
                  <input type="text" />
                </div>
              ) : null}
            </div>
          </div>
        ) : null}

        <input type="submit" value="Submit" />
      </form>

      {/* 담당자 로그인탭 */}
      <div>
        <select onChange={onMethodClick}>
          <option defaultChecked value={"email"}>
            민원인
          </option>
          <option value={"city"}>시군담당자</option>
          <option value={"village"}>읍면동담당자</option>
        </select>
      </div>
    </div>
  );
};

export default React.memo(Enter);
