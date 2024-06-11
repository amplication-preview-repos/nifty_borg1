import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { CourseList } from "./course/CourseList";
import { CourseCreate } from "./course/CourseCreate";
import { CourseEdit } from "./course/CourseEdit";
import { CourseShow } from "./course/CourseShow";
import { ModuleModelList } from "./moduleModel/ModuleModelList";
import { ModuleModelCreate } from "./moduleModel/ModuleModelCreate";
import { ModuleModelEdit } from "./moduleModel/ModuleModelEdit";
import { ModuleModelShow } from "./moduleModel/ModuleModelShow";
import { EnrollmentList } from "./enrollment/EnrollmentList";
import { EnrollmentCreate } from "./enrollment/EnrollmentCreate";
import { EnrollmentEdit } from "./enrollment/EnrollmentEdit";
import { EnrollmentShow } from "./enrollment/EnrollmentShow";
import { AssignmentList } from "./assignment/AssignmentList";
import { AssignmentCreate } from "./assignment/AssignmentCreate";
import { AssignmentEdit } from "./assignment/AssignmentEdit";
import { AssignmentShow } from "./assignment/AssignmentShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"LMSService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Course"
          list={CourseList}
          edit={CourseEdit}
          create={CourseCreate}
          show={CourseShow}
        />
        <Resource
          name="ModuleModel"
          list={ModuleModelList}
          edit={ModuleModelEdit}
          create={ModuleModelCreate}
          show={ModuleModelShow}
        />
        <Resource
          name="Enrollment"
          list={EnrollmentList}
          edit={EnrollmentEdit}
          create={EnrollmentCreate}
          show={EnrollmentShow}
        />
        <Resource
          name="Assignment"
          list={AssignmentList}
          edit={AssignmentEdit}
          create={AssignmentCreate}
          show={AssignmentShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
