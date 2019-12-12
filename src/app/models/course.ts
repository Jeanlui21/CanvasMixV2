export interface Course 
{
    id: number;
    user_id: number;
    course_id: number;
    type: string;
    created_at: string;
    updated_at: string;
    associated_user_id: null;
    start_at: null;
    end_at: null;
    course_section_id: number;
    root_account_id: number;
    limit_privileges_to_course_section: boolean;
    enrollment_state: string;
    role: string;
    role_id: number;
    last_activity_at: string;
    last_attended_at: null;
    total_activity_time: number;
    grades: {
    html_url: string;
    current_grade: null;
    current_score: number;
    final_grade: null;
    final_score: number;
    unposted_current_score: number;
    unposted_current_grade: null;
    unposted_final_score: number;
    unposted_final_grade: null;
    };
    sis_account_id: string;
    sis_course_id: null;
    course_integration_id: null;
    sis_section_id: number;
    section_integration_id: null;
    sis_user_id: number;
    html_url: string;
    user: {
    id: number;
    name: string;
    created_at: string;
    sortable_name: string;
    short_name: string;
    sis_user_id: number;
    integration_id: number;
    }
}

