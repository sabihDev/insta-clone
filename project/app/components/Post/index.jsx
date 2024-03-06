import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { FaRegHeart, FaRegBookmark } from "react-icons/fa";
import { FiMessageCircle } from "react-icons/fi";
import { PiPaperPlaneTiltBold } from "react-icons/pi";

const PostContainer = styled.div`
  max-width: 400px;
  margin-left: 150px;
  border: 1px solid #dbdbdb;
  background-color: #000;
  margin-bottom: 24px;
  border-radius: 3px;
  z-index: 0;
`;

const PostHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  border: 1px solid #dbdbdb;
`;

const UserProfileImage = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-right: 14px;
`;

const UserName = styled.span`
  font-weight: bold;
`;

const PostImage = styled.div`
  max-width: 400px;
  position: relative;
`;

const PostCaption = styled.div`
  padding: 16px;
`;

const InteractionBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const InteractionButton = styled.div`
  display: inline;
  padding: 0 8px;
  gap: 8px;
  background: none;
  border: none;
  cursor: pointer;
`;

const InstagramPost = ({ post }) => {
    return (
        <PostContainer>
            <PostHeader>
                <UserProfileImage src="https://i.pravatar.cc" alt="Sabi" />
                <UserName>Sabi</UserName>
            </PostHeader>
            <PostImage>
                <Image
                    src="https://i.pravatar.cc"
                    alt="Instagram Post"
                    layout="responsive"
                    width={500}
                    height={500}
                    objectFit="cover"
                />
            </PostImage>
            <PostCaption>Caption</PostCaption>
            <InteractionBar>
                <div>
                    <InteractionButton>
                        {/* Replace with actual icons */}
                        <span>
                            <FaRegHeart />
                        </span>
                    </InteractionButton>
                    <InteractionButton>
                        <span>
                            <FiMessageCircle />
                        </span>
                    </InteractionButton>
                    <InteractionButton>
                        <span>
                            <PiPaperPlaneTiltBold />
                        </span>
                    </InteractionButton>
                </div>
                <InteractionButton>
                    <span>
                        <FaRegBookmark />
                    </span>
                </InteractionButton>
            </InteractionBar>
        </PostContainer>
    );
};

export default InstagramPost;
