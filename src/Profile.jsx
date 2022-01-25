import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { FaMapMarker } from "react-icons/fa";

const OuterDiv = styled.div`
  display: grid;
  grid-template-columns: fit-content(30%) fit-content(70%);
  padding: 20px;
  width: 50%;
  margin: 2% auto;
  background-color: ;
`;

const InnerCards = styled.div`
  border-bottom: 1px solid #8f8f8f;
  padding: 20px;
  display: grid;
`;

const TextBox = styled.div`
  display: flex;
  align-items: center;
  color: #c1a3a3;

  font-size: 1.4rem;
`;
const DetailBox = styled.div`
  justify-content: flex-start;
  color: #886f6f;
  font-size: 1.2em;
  padding: 5px;

  display: flex;
  align-items: center;
  padding: 8px;
`;

const SecondaryHeading = styled.h3`
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
  color: #747474;
`;

const Button = styled.button`
  padding: 10px 12px;
  border-radius: 6px;
  border: none;
  background: #cddeff;
  color: #406882;
  &:hover {
    transform: scale(1.1);
    background: #30475e;
    color: white;
    cursor: pointer;
  }
`;

export default function Profile() {
    const [data, setData] = useState();
    const FetchProfileData = async () => {
        await axios
            .get("https://randomuser.me/api/")
            .then((res) => {
                console.log(res.data.results[0]);
                setData(res.data.results[0]);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    useEffect(() => {
        FetchProfileData();
    }, []);

    return (
        <div>
            <OuterDiv>
                <InnerCards>
                    {" "}
                    <img src={data && data.picture.large} />
                </InnerCards>
                <InnerCards>
                    <TextBox>
                        <h1 style={{ color: "#8f8f8f" }}>
                            {" "}
                            {data && data.name.title} {data && data.name.first}
                            {data && data.name.last}
                        </h1>
                    </TextBox>

                    <TextBox>
                        <FaMapMarker></FaMapMarker>
                        <p style={{ marginLeft: "6px", fontSize: "1.3rem" }}>
                            {data && data.location.country}
                        </p>
                    </TextBox>
                </InnerCards>
                <InnerCards>
                    <TextBox>
                        <h2 style={{ color: "#8f8f8f" }}>
                            {" "}
                            {data && data.location.street.number}{" "}
                            {data && data.location.street.name} Street
                        </h2>
                    </TextBox>
                    <TextBox>
                        <FaMapMarker></FaMapMarker>
                        <p style={{ marginLeft: "6px", fontSize: "1.3rem" }}>
                            {data && data.location.country}
                        </p>
                    </TextBox>
                </InnerCards>
                <InnerCards>
                    <SecondaryHeading> Contact Information</SecondaryHeading>
                    <DetailBox>
                        <p style={{ margin: "5px " }}>Phone : </p>{" "}
                        <p style={{ color: "#C1A3A3", cursor: "pointer" }}>
                            {data && data.cell}
                        </p>
                    </DetailBox>
                    <DetailBox>
                        <p style={{ margin: "5px " }}> Email :</p>{" "}
                        <p style={{ color: "#C1A3A3", cursor: "pointer" }}>
                            {data && data.email}
                        </p>
                    </DetailBox>{" "}
                    <DetailBox>
                        <p style={{ margin: "5px " }}> Age :</p>
                        <p style={{ color: "#C1A3A3", cursor: "pointer" }}>
                            {data && data.dob.age}
                        </p>
                    </DetailBox>{" "}
                    <DetailBox>
                        <p style={{ margin: "5px " }}> Birthday :</p>
                        <p style={{ color: "#C1A3A3", cursor: "pointer" }}>
                            {data && data.dob.date.substring(0, 10)}
                        </p>
                    </DetailBox>
                </InnerCards>
            </OuterDiv>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <Button
                    onClick={() => {
                        FetchProfileData();
                    }}
                >
                    Change Profile
                </Button>
            </div>
        </div>
    );
}
