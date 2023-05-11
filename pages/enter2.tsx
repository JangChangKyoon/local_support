import Button from "@/component/button";
import Input from "@/component/input";
import React, { useState } from "react";
import { FieldErrors, useForm } from "react-hook-form";

type method = "email" | "phone" | "city" | "village";

interface Method {
  method?: method;
}

interface IForm {
  email?: string;
  phone?: number;
  password?: string;

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

function cls(...classnames: string[]) {
  return classnames.join(" ");
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
    <div className="mt-16 px-4">
      <h5 className="font-bold text-3xl text-center">
        Enter To Local Life Support Center
      </h5>
      <div>
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

          <div>
            {method.method === "email" ? (
              // email 로그인 input

              <Input
                register={{
                  ...register("email", {
                    required: "Email is required",
                    pattern: {
                      value:
                        /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/,
                      message: "Email pattern required",
                    },
                  }),
                }}
                placeholder="email"
                type="email"
                name="email"
                // register 이름과 같아야 함.
                id="email"
                message={errors.email?.message?.toString()}
              />
            ) : null}

            {method.method === "phone" ? (
              <div>
                <Input
                  register={{
                    ...register("phone", {
                      required: "Phone number is required",
                      pattern: {
                        value: /^01(?:0|1|[6-9])(\d{4}|\d{3})(\d{4})$/,
                        message: "length 10~11, start with '01'",
                      },
                    }),
                  }}
                  placeholder="phone number"
                  type="number"
                  name="phone"
                  id="phone"
                  message={errors.phone?.message?.toString()}
                />
              </div>
            ) : null}
          </div>

          {/* 담당자 로그인 랜더링 */}
          {method.method === "city" || method.method === "village" ? (
            <div>
              <label>
                {method.method === "city"
                  ? "시군 담당자"
                  : method.method === "village"
                  ? "읍면동 담당자"
                  : null}
              </label>
              <div>
                <Button
                  type={"button"}
                  onClick={onAccountClick}
                  value={"login"}
                  method={method.method}
                />

                <Button
                  type={"button"}
                  onClick={onAccountClick}
                  value={"account"}
                  method={method.method}
                />
              </div>

              <div>
                {/* 시군담당자 로그인 회원가입 : 삼항연산자 중첩사용  */}
                {method.method === "city" && account === false ? (
                  <div>
                    <Input
                      register={{
                        ...register("cityLogin.email", {
                          required: "Email is required",
                          validate: {
                            validate: (value) =>
                              value.includes("@korea.kr") || "Only '@korea.kr'",
                          },
                        }),
                      }}
                      placeholder="email"
                      type="email"
                      id="email"
                      name="cityLogin.email"
                      message={errors.cityLogin?.email?.message?.toString()}
                    />

                    <Input
                      register={{
                        ...register("cityLogin.password", {
                          required: "Password is required",
                          minLength: {
                            message:
                              "The password should be longer than 5 chars",
                            value: 5,
                          },
                        }),
                      }}
                      placeholder="password"
                      type="password"
                      id="password"
                      name="cityLogin.password"
                      message={errors.cityLogin?.password?.message.toString()}
                    />
                  </div>
                ) : // 시군 회원가입
                method.method === "city" && account === true ? (
                  <div>
                    <Input
                      register={{
                        ...register("cityAccount.email", {
                          required: "Email is requierd",
                          validate: {
                            korea: (value) =>
                              value.includes("@korea.kr") || "Only '@korea.kr'",
                          },
                        }),
                      }}
                      placeholder="email"
                      type="email"
                      id="email"
                      name="cityAccount.email"
                      message={errors.cityAccount?.email?.message?.toString()}
                    />

                    <Input
                      register={{
                        ...register("cityAccount.password1", {
                          required: "Password is required",
                          minLength: {
                            message:
                              "The password should be longer than 5 chars",
                            value: 5,
                          },
                        }),
                      }}
                      placeholder="password"
                      type="password"
                      id="password1"
                      name="cityAccount.password1"
                      message={errors.cityAccount?.password1?.message.toString()}
                    />

                    <Input
                      register={{
                        ...register("cityAccount.password2", {
                          required: true,
                          minLength: {
                            message:
                              "The password should be longer than 5 chars",
                            value: 5,
                          },
                        }),
                      }}
                      placeholder="password"
                      type="password"
                      id="password2"
                      name="cityAccount.password2"
                      message={errors.cityAccount?.password2?.message?.toString()}
                    />
                  </div>
                ) : null}

                {/* 읍면담당자 로그인 회원가입 : 삼항연산자 중첩사용  */}
                {method.method === "village" && account === false ? (
                  <div>
                    <Input
                      register={{
                        ...register("villageLogin.email", {
                          required: "Email is required",
                          validate: {
                            korea: (value) =>
                              value.includes("@korea.kr") || "Only 'korea.kr'",
                          },
                        }),
                      }}
                      id="email"
                      placeholder="email"
                      type="email"
                      name="villageLogin.email"
                      message={errors.villageLogin?.email?.message?.toString()}
                    />

                    <Input
                      register={{
                        ...register("villageLogin.password", {
                          required: "The password is required",
                          minLength: {
                            message:
                              "The password should be longer than 5 chars",
                            value: 5,
                          },
                        }),
                      }}
                      placeholder="password"
                      id="password"
                      type="password"
                      name="villageLogin.password"
                      message={errors.villageLogin?.password?.message?.toString()}
                    />
                  </div>
                ) : method.method === "village" && account === true ? (
                  // 읍면 회원가입
                  <div>
                    <Input
                      register={{
                        ...register("villageAccount.email", {
                          required: "Email is required",
                          validate: {
                            korea: (value) =>
                              value.includes("@korea.kr") || "Only '@korea.kr'",
                          },
                        }),
                      }}
                      placeholder="email"
                      type="email"
                      id="email"
                      name="villageAccount.email"
                      message={errors.villageAccount?.email?.message?.toString()}
                    />

                    <Input
                      register={{
                        ...register("villageAccount.password1", {
                          required: "Password is required",
                          minLength: {
                            message:
                              "The password should be longer than 5 chars",
                            value: 5,
                          },
                        }),
                      }}
                      id="password1"
                      placeholder="password"
                      type="password"
                      name="villageAccount.password1"
                      message={errors.villageAccount?.password1?.message?.toString()}
                    />

                    <Input
                      register={{
                        ...register("villageAccount.password2", {
                          required: "Password is required",
                          minLength: {
                            message: "Password should be longer than 5 chars",
                            value: 5,
                          },
                        }),
                      }}
                      id="password2"
                      placeholder="password"
                      type="password"
                      name="villageAccount.password2"
                      message={errors.villageAccount?.password2?.message?.toString()}
                    />
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
    </div>
  );
};

export default React.memo(Enter);
