package com.eefy.member.domain.member.dto.request;

import com.eefy.member.domain.member.persistence.entity.Member;
import com.eefy.member.domain.member.persistence.entity.enums.MemberRole;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PRIVATE)
public class JoinRequest {
    @Email
    private String email;

    @NotBlank(message = "실명을 입력해주세요.")
    @Size(min = 2, message = "이름이 너무 짧습니다.")
    private String name;

    @NotBlank(message = "닉네임을 입력해주세요.")
    @Size(min = 2, message = "2자리 이상 닉네임을 입력해주세요.")
    private String nickname;

    @NotBlank(message = "비밀번호를 입력해주세요.")
    @Pattern(regexp = "^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,20}$",
            message = "비밀번호는 8~20 자리이면서 1개 이상의 알파벳, 숫자, 특수문자를 포함해야합니다.")
    private String password;

    private String checkedPassword;

    @NotBlank(message = "휴대폰 번호를 입력해주세요.")
    @Pattern(regexp = "^\\d{2,3}-\\d{3,4}-\\d{4}$",
            message = "휴대폰 번호의 양식과 일치하지 않습니다.")
    private String phoneNumber;

    @NotBlank(message = "역할이 비어있습니다.")
    private String role;

    public Member toEntity() {
        return Member.builder()
                .email(email)
                .password(password)
                .name(name)
                .nickname(nickname)
                .phoneNumber(phoneNumber)
                .role(role.equals("TEACHER") ? MemberRole.TEACHER : MemberRole.STUDENT)
                .build();
    }
}
