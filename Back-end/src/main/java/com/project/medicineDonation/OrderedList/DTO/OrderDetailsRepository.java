package com.project.medicineDonation.OrderedList.DTO;

import com.project.medicineDonation.OrderedList.OrderedList;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface OrderDetailsRepository extends JpaRepository<OrderDetailsDto, Integer>, JpaSpecificationExecutor<OrderDetailsDto> {
}
